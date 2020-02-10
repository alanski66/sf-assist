<?php
/**
 * UserGroupLogin plugin for Craft CMS 3.x
 *
 * Lets user login with company id
 *
 * @link      https://www.joomkit.com
 * @copyright Copyright (c) 2020 joomkit
 */

namespace joomkit\usergrouplogin\models;

use joomkit\usergrouplogin\UserGroupLogin;

use Craft;
use craft\base\Model;

/**
 * @author    joomkit
 * @package   UserGroupLogin
 * @since     1
 */
class Settings extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $someAttribute = 'Some Default';

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['someAttribute', 'string'],
            ['someAttribute', 'default', 'value' => 'Some Default'],
        ];
    }
}
