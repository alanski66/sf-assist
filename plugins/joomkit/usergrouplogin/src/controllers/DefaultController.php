<?php
/**
 * UserGroupLogin plugin for Craft CMS 3.x
 *
 * Lets user login with company id
 *
 * @link      https://www.joomkit.com
 * @copyright Copyright (c) 2020 joomkit
 */

namespace joomkit\usergrouplogin\controllers;

use joomkit\usergrouplogin\UserGroupLogin;

use Craft;
use craft\web\Controller;

/**
 * @author    joomkit
 * @package   UserGroupLogin
 * @since     1
 */
class DefaultController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = ['index', 'do-something'];

    // Public Methods
    // =========================================================================

    /**
     * @return mixed
     */
    public function actionIndex()
    {
        $result = 'Welcome to the DefaultController actionIndex() method';

        return $result;
    }

    /**
     * @return mixed
     */
    public function actionDoSomething()
    {
        $result = 'Welcome to the DefaultController actionDoSomething() method';

        return $result;
    }
}
