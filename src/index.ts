import {SecurityAccess} from 'akuma-microservice-framework/lib/adapters/action-protocol/security-access';

const accessToken = process.env.TOKEN_ACCESS || 'secret';

export const securityAccess = {
  checkAccess(token: string): boolean {
    return accessToken === token;
  },
} as SecurityAccess;
