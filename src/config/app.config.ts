interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Administrator'],
  tenantName: 'Company',
  applicationName: 'Test9',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read product information',
    'Write reviews',
    'Read company information',
    'Manage own user information',
  ],
  ownerAbilities: ['Manage categories', 'Manage reviews', 'Manage products', 'Manage users', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/268a8be6-5f42-4128-8ca5-295f6b984487',
};
