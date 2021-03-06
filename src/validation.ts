import { Check, CheckType, Settings, HttpSettings, PingSettings, DnsSettings, TcpSettings, Label } from 'types';
import { checkType } from 'utils';
import * as punycode from 'punycode';
import { Address4, Address6 } from 'ip-address';
import validUrl from 'valid-url';

export const CheckValidation = {
  job: validateJob,
  target: validateTarget,
  frequency: validateFrequency,
  timeout: validateTimeout,
  labels: validateLabels,
  settings: validateSettings,
  probes: validateProbes,
};

export function validateCheck(check: Check): boolean {
  return Boolean(
    CheckValidation.job(check.job) &&
      CheckValidation.target(checkType(check.settings), check.target) &&
      CheckValidation.frequency(check.frequency) &&
      CheckValidation.timeout(check.timeout) &&
      CheckValidation.labels(check.labels) &&
      CheckValidation.settings(check.settings) &&
      CheckValidation.probes(check.probes)
  );
}

export function validateJob(job: string): string | undefined {
  if (job.length > 32) {
    return 'Job name must be 32 characters or less';
  }
  return undefined;
}

export function validateTarget(typeOfCheck: CheckType, target: string): string | undefined {
  if (target.length > 2040) {
    return 'Target length must be less than 2040 characters';
  }

  switch (typeOfCheck) {
    case CheckType.HTTP: {
      return validateHttpTarget(target);
    }
    case CheckType.PING: {
      return validateHostname(target);
    }
    case CheckType.DNS: {
      return validateHostname(target);
    }
    case CheckType.TCP: {
      return validateHostPort(target);
    }
    default: {
      // we want to make sure that we are validating the target for all
      // check types; if someone adds a check type but forgets to update
      // this validation, it will land here.
      return 'Invalid check type';
    }
  }
}

export function validateFrequency(frequency: number): string | undefined {
  if (frequency < 10) {
    return 'Frequency must be at least 10 seconds';
  }
  if (frequency > 120) {
    return 'Frequency cannot be greater than 120 seconds';
  }
  return undefined;
}

export function validateTimeout(timeout: number): string | undefined {
  if (timeout < 1) {
    return 'Timeout must be at least 1 second';
  }
  if (timeout > 10) {
    return 'Timeout cannot be greater than 10 seconds';
  }
  return undefined;
}

export function validateLabels(labels: Label[]): boolean {
  if (labels.length < 0 || labels.length > 5) {
    return false;
  }
  // validate each label
  for (const l of labels) {
    if (!validateLabel(l)) {
      return false;
    }
  }
  return true;
}

const labelRegex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

export function validateLabel(label: Label): string | undefined {
  return validateLabelName(label.name) && validateLabelValue(label.value);
}

export function validateLabelName(name: string): string | undefined {
  if (name.length > 32) {
    return 'Label names must be 32 characters or less';
  }
  if (!labelRegex.test(name)) {
    return 'Invalid label name';
  }

  return undefined;
}

export function validateLabelValue(value: string): string | undefined {
  if (value.length > 32) {
    return 'Label names must be 32 characters or less';
  }
  if (!labelRegex.test(value)) {
    return 'Invalid label value';
  }

  return undefined;
}

export const validateBasicAuthUsername = (username: string) => {
  return undefined;
};

export const validateBearerToken = (token: string) => {
  return undefined;
};

export const validateTLSServerName = (serverName: string) => {
  return undefined;
};

export const validateTLSCACert = (caCert: string) => {
  return undefined;
};

export const validateTLSClientCert = (clientCert: string) => {
  return undefined;
};

export const validateTLSClientKey = (clientKey: string) => {
  return undefined;
};

export function validateSettings(settings: Settings): string | undefined {
  let checkT = checkType(settings);
  if (!settings[checkT]) {
    return 'Settings values required';
  }

  switch (checkT) {
    case CheckType.HTTP: {
      return validateSettingsHTTP(settings.http!);
    }
    case CheckType.PING: {
      return validateSettingsPING(settings.ping!);
    }
    case CheckType.DNS: {
      return validateSettingsDNS(settings.dns!);
    }
    case CheckType.TCP: {
      return validateSettingsTCP(settings.tcp!);
    }
  }
}

export function validateProbes(probes: number[]): string | undefined {
  if (probes.length === 0) {
    return 'Select a probe';
  }
  if (probes.length > 64) {
    return `The maximum probe quantity is 64, you have selected ${probes.length}`;
  }
  return undefined;
}

export const validateHTTPBody = (body: string) => {
  return undefined;
};

export const validateHTTPHeaderName = (name: string) => {
  return undefined;
};

export const validateHTTPHeaderValue = (name: string) => {
  return undefined;
};

export function validateSettingsHTTP(settings: HttpSettings): string | undefined {
  return undefined;
}

export function validateSettingsPING(settings: PingSettings): string | undefined {
  return undefined;
}

export function validateSettingsDNS(settings: DnsSettings): string | undefined {
  return undefined;
}

export function validateSettingsTCP(settings: TcpSettings): string | undefined {
  return undefined;
}

function validateHttpTarget(target: string): string | undefined {
  const isValidUrl = Boolean(validUrl.isWebUri(target));
  if (!isValidUrl) {
    return 'Target must be a valid web URL';
  }
  const parsedUrl = new URL(target);
  if (!parsedUrl.protocol) {
    return 'Target must have a valid protocol';
  }

  // isWebUri will allow some invalid hostnames, so we need addional validation
  const hostname = new URL(target).hostname;
  if (validateHostname(hostname)) {
    return 'Target must have a valid hostname';
  }
  return undefined;
}

function validateHostname(target: string): string | undefined {
  const ipv4 = new Address4(target);
  const ipv6 = new Address6(target);
  const pc = punycode.toASCII(target);
  // note that \w matches "_"
  const re = new RegExp(/^[a-z0-9]([-a-z0-9]{0,62}[a-z0-9])?(\.[a-z]([-a-z0-9]{0,62}[a-z0-9])?)+$/, 'i');
  if (!pc.match(re) && !ipv4.isValid() && !ipv6.isValid()) {
    return 'Target must be a valid hostname';
  }

  return undefined;
}

function validateHostPort(target: string): string | undefined {
  const re = new RegExp(/^(?:\[([0-9a-f:.]+)\]|([^:]+)):(\d+)$/, 'i');
  const match = target.match(re);

  if (match === null) {
    return 'Must be a valid host:port combination';
  }

  const host = match[1] !== undefined ? match[1] : match[2];
  const port = parseInt(match[match.length - 1], 10);

  if (isNaN(port)) {
    return 'Invalid port value';
  }
  if (port > 65535) {
    return 'Port must be less than 65535';
  }

  if (port <= 0) {
    return 'Port must be greater than 0';
  }

  return validateHostname(host);
}
