/* eslint-disable @stylistic/semi */
import '/js/cookieconsent.umd.js';

const CAT_NECESSARY = 'necessary';
const CAT_ANALYTICS = 'analytics';
const CAT_ADVERTISEMENT = 'advertisement';
const CAT_FUNCTIONALITY = 'functionality';
const CAT_SECURITY = 'security';

const SERVICE_AD_STORAGE = 'ad_storage'
const SERVICE_AD_USER_DATA = 'ad_user_data'
const SERVICE_AD_PERSONALIZATION = 'ad_personalization'
const SERVICE_ANALYTICS_STORAGE = 'analytics_storage'
const SERVICE_FUNCTIONALITY_STORAGE = 'functionality_storage'
const SERVICE_PERSONALIZATION_STORAGE = 'personalization_storage'
const SERVICE_SECURITY_STORAGE = 'security_storage'

// Define dataLayer and the gtag function.
window.dataLayer = window.dataLayer || [];
function gtag () { dataLayer.push( arguments ) }

// Set default consent to 'denied' (this should happen before changing any other dataLayer)
gtag('consent', 'default', {
  [SERVICE_AD_STORAGE]: 'denied',
  [SERVICE_AD_USER_DATA]: 'denied',
  [SERVICE_AD_PERSONALIZATION]: 'denied',
  [SERVICE_ANALYTICS_STORAGE]: 'denied',
  [SERVICE_FUNCTIONALITY_STORAGE]: 'denied',
  [SERVICE_PERSONALIZATION_STORAGE]: 'denied',
  [SERVICE_SECURITY_STORAGE]: 'denied',
});

/**
 * Update gtag consent according to the users choices made in CookieConsent UI
 */
function updateGtagConsent () {
  gtag('consent', 'update', {
    [SERVICE_ANALYTICS_STORAGE]: CookieConsent.acceptedService(SERVICE_ANALYTICS_STORAGE, CAT_ANALYTICS) ? 'granted' : 'denied',
    [SERVICE_AD_STORAGE]: CookieConsent.acceptedService(SERVICE_AD_STORAGE, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
    [SERVICE_AD_USER_DATA]: CookieConsent.acceptedService(SERVICE_AD_USER_DATA, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
    [SERVICE_AD_PERSONALIZATION]: CookieConsent.acceptedService(SERVICE_AD_PERSONALIZATION, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
    [SERVICE_FUNCTIONALITY_STORAGE]: CookieConsent.acceptedService(SERVICE_FUNCTIONALITY_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
    [SERVICE_PERSONALIZATION_STORAGE]: CookieConsent.acceptedService(SERVICE_PERSONALIZATION_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
    [SERVICE_SECURITY_STORAGE]: CookieConsent.acceptedService(SERVICE_SECURITY_STORAGE, CAT_SECURITY) ? 'granted' : 'denied',
  });
}

/**
 * Enable suggestions
 * @type {import('../../types')}
 */
CookieConsent.run({

  revision: 1,
  disablePageInteraction: true,

  cookie: {
    name: 'cc_cookie_flf',
  },

  guiOptions: {
    consentModal: {
      layout: 'box wide',
      position: 'bottom right'
    },
    preferencesModal: {
      layout: 'box'
    }
  },

  onFirstConsent: () => {
    updateGtagConsent();
  },

  onConsent: () => {
    updateGtagConsent();
  },

  onChange: () => {
    updateGtagConsent();
  },

  // Configure categories and services
  categories: {
    [CAT_NECESSARY]: {
      enabled: true,  // this category is enabled by default
      readOnly: true,  // this category cannot be disabled
    },
    [CAT_ANALYTICS]: {
      autoClear: {
        cookies: [
          {
            name: /^_ga/,   // regex: match all cookies starting with '_ga'
          },
          {
            name: '_gid',   // string: exact cookie name
          }
        ]
      },
      // See: https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
      services: {
        [SERVICE_ANALYTICS_STORAGE]: {
          label: 'Enables storage (such as cookies) related to analytics e.g. visit duration.',
        }
      }
    },
    [CAT_ADVERTISEMENT]: {
      services: {
        [SERVICE_AD_STORAGE]: {
          label: 'Enables storage (such as cookies) related to advertising.',
        },
        [SERVICE_AD_USER_DATA]: {
          label: 'Sets consent for sending user data related to advertising to Google.',
        },
        [SERVICE_AD_PERSONALIZATION]: {
          label: 'Sets consent for personalized advertising.',
        },
      }
    },
    [CAT_FUNCTIONALITY]: {
      services: {
        [SERVICE_FUNCTIONALITY_STORAGE]: {
          label: 'Enables storage that supports the functionality of the website or app e.g. language settings.',
        },
        [SERVICE_PERSONALIZATION_STORAGE]: {
          label: 'Enables storage related to personalization e.g. video recommendations.',
        },
      }
    },
    [CAT_SECURITY]: {
      services: {
        [SERVICE_SECURITY_STORAGE]: {
          label: 'Enables storage related to security such as authentication functionality, fraud prevention, and other user protection.',
        },
      }
    }
  },

  language: {
    default: 'en',

    translations: {
      en: {
        consentModal: {
          title: 'Hello Fan of LeFox, it\'s cookie time!',
          description: 'Like most websites, Fans of LeFox uses essential cookies to ensure everything works and to see what you\'re interested in reading. The tracking stuff will be set only after consent. That means if you click "Reject" right now, you won\'t get any Google Analytics cookies.',
          acceptAllBtn: 'Accept',
          acceptNecessaryBtn: 'Reject',
          showPreferencesBtn: 'Manage preferences',
          closeIconLabel: 'Reject all and close',
          footer: `
                        <a href="/tos/privacy/">Privacy Policy</a>
                        <a href="/tos/">Terms of Use</a>
                    `
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          sections: [
            {
              title: 'Cookie usage',
              description: 'We try to limit our use of any cookies to the bare minimum. Mostly because we hate tracking too. For more details, refer to our <a href="/tos/privacy/" class="cc__link">privacy policy</a>.'
            }, {
              title: 'Strictly necessary cookies (enabled)',
              description: 'At this time we have NO necessary cookies. This option is here as a placeholder in case we have to add any later. We will notify all users if this changes.',
              // description: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.',
              linkedCategory: CAT_NECESSARY,
            }, {
              title: 'Analytics (disabled by default)',
              description: 'Cookies used for analytics help collect data that allows services to understand how users interact with a particular service. These insights allow services both to improve content and to build better features that improve the user’s experience.',
              linkedCategory: CAT_ANALYTICS,
              cookieTable: {
                headers: {
                  name: 'Name',
                  domain: 'Service',
                  description: 'Description',
                  expiration: 'Expiration'
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'Google Analytics',
                    description: 'Cookie set by <a href="https://business.safety.google/adscookies/">Google Analytics</a>',
                    expiration: 'Expires after 12 days'
                  },
                  {
                    name: '_gid',
                    domain: 'Google Analytics',
                    description: 'Cookie set by <a href="https://business.safety.google/adscookies/">Google Analytics</a>',
                    expiration: 'Session'
                  }
                ]
              }
            }
          ]
        }
      }
    }
  }
});
