<?php
/**
 * UserGroupLogin plugin for Craft CMS 3.x
 *
 * Lets user login with company id
 *
 * @link      https://www.joomkit.com
 * @copyright Copyright (c) 2020 joomkit
 */

namespace joomkit\usergrouplogin\variables;

use joomkit\usergrouplogin\UserGroupLogin;

use Craft;

/**
 * @author    joomkit
 * @package   UserGroupLogin
 * @since     1
 */
class UserGroupLoginVariable
{
    // Public Methods
    // =========================================================================

    /**
     * @param null $optional
     * @return string
     */
    public function exampleVariable($optional = null)
    {
        $result = "And away we go to the Twig template...";
        if ($optional) {
            $result = "I'm feeling optional today...";
        }
        return $result;
    }
}
