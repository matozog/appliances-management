import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import applicationProfile, { ApplicationProfileState } from './application-profile';
import authentication, { AuthenticationState } from './authentication';
import locale, { LocaleState } from './locale';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';

import appliances from 'app/modules/appliances/state/reducer';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const rootReducer = {
  appliances,
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar,
};

export default rootReducer;
