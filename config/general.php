<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,

        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,
        'useProjectConfigFile' => false,
        // Control Panel trigger word
        'cpTrigger' => 'admin',
//        'logoutPath' => '/logout/logOut.twig',
        'shipAPIdomain' => 'https://www.seafarerswelfare.org',
        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),
        'baseUrl'  => getenv('CRAFTENV_BASE_URL'),
        'basePath' => getenv('CRAFTENV_BASE_PATH'),
        'aliases' => [
            '@assetsUrl' => getenv('ASSET_BASE_URL'),
            '@assetBaseUrl' => getenv('ASSET_BASE_URL'),
            '@assetBasePath' => getenv('ASSET_BASE_PATH'),
            '@baseUrl' => getenv('CRAFTENV_BASE_URL'),
            '@web' => getenv('CRAFTENV_BASE_URL'),
            '@basePath' => getenv('CRAFTENV_BASE_PATH')
        ],

//    'errorTemplatePrefix' => "_errors/"
    ],

    // Dev environment settings
    'dev' => [
        // Base site URL
       // 'siteUrl' => null,
        'cache' => false,
        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,
        'shipAPIdomain' => 'https://iswancraft3.test',
    ],

    // Staging environment settings
    'staging' => [
        'cache' => false,
        // Base site URL
        'siteUrl' => null,
        'shipAPIdomain' => 'https://www.seafarerswelfare.org',
    ],

    // Production environment settings
    'production' => [
        // Base site URL
        'siteUrl' => null,
        'shipAPIdomain' => 'https://www.seafarerswelfare.org',
    ]
];
