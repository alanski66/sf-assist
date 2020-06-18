<?php
/**
 * UserGroupLogin plugin for Craft CMS 3.x
 *
 * Lets user login with company id
 *
 * @link      https://www.joomkit.com
 * @copyright Copyright (c) 2020 joomkit
 */

namespace joomkit\usergrouplogin\assetbundles\UserGroupLogin;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * @author    joomkit
 * @package   UserGroupLogin
 * @since     1
 */
class UserGroupLoginAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = "@joomkit/usergrouplogin/assetbundles/usergrouplogin/dist";

        $this->depends = [
            CpAsset::class,
        ];

        $this->js = [
            'js/UserGroupLogin.js',
        ];

        $this->css = [
            'css/UserGroupLogin.css',
        ];

        parent::init();
    }
}
