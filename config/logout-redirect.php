<?php
return [
    // Enable the redirect check
    'enabled' => true,

    // To redirect all users after logout - this will override the two other config options
    'redirectUrl' => '/',

    // To redirect CP users after logout
    'redirectCpUrl'   => '/cp-goodbye',

    // To redirect site users after logout
    'redirectSiteUrl' => '/goodbye',
];