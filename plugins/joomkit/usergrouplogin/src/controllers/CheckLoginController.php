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
use putyourlightson\logtofile\LogToFile;

use Craft;
use craft\web\Controller;


/**
 * @author    joomkit
 * @package   UserGroupLogin
 * @since     1
 */
class CheckLoginController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = ['login', 'do-something'];

    // Public Methods
    // =========================================================================

    /**
     * @return mixed
     */
    public function actionLogin()
    {
        
        // $userId = Craft::$app->request->getPost('loginName');
        $userId = Craft::$app->getRequest()->post('loginName');
        $user = Craft::$app->getUsers()->getUserByUsernameOrEmail($userId);
        # Login as user, by id
        Craft::$app->getUser()->loginByUserId($user->id);
            $csite = Craft::$app->getSites()->currentSite->handle;
        $url ='redirect';
        return $this->redirect($url);

        # Redirect
        // return Craft::$app->getResponse()->redirect($url)->send();
        // $userSession = Craft::$app->getUser();
        // $user = Craft::$app->getUsers()->getUserByUsernameOrEmail($userId);

        // $userSession = Craft::$app->getUser();
        // $session = Craft::$app->getSession();
        // $request = Craft::$app->getRequest();

        // $usersService = Craft::$app->getUsers();
        // $impersonatee = $usersService->getUserById($user->id);
        // $userSession->getIdentity();

        // $userSession->loginByUserId($user->id);

        return Craft::$app->getResponse()->redirect('landers')->send();
        // $message = Craft::$app->getResponse();

        // // Log as info
        // LogToFile::info($message, 'usergrouplogin');

        // // Log as error
        // LogToFile::error($message, 'usergrouplogin');

        // // Log as Yii message level
        // LogToFile::log($message, 'usergrouplogin', 'error');

        // // Log as custom category
        // LogToFile::log($message, 'usergrouplogin', 'custom-category');

        
        
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
