<?php
namespace modules\businesslogic;

use Craft;
use craft\elements\Entry;
use craft\events\RegisterElementSourcesEvent;

use craft\web\twig\variables\CraftVariable;
use modules\businesslogic\services\Example;
use modules\businesslogic\variables\BusinessLogicVariable;
use yii\base\Event;
use yii\base\Module;

/**
 * See the docs for more information...
 *
 * https://doublesecretagency.github.io/craft-businesslogic/
 */

class BusinessLogic extends Module
{

    /**
     * @var Module Self-referential module property.
     */
    public static $instance;

    /**
     * Initializes the module.
     */
    public function init()
    {

        // // Modify entry sources
        // Event::on(Entry::class, Entry::EVENT_REGISTER_SOURCES, function(RegisterElementSourcesEvent $event) {
        //     if ($event->context === 'index') {
        //         // Remove "All Entries"
        //         foreach ($event->sources as $i => $source) {
        //             if (array_key_exists('key', $source) && ('*' == $source['key'])) {
        //                 unset($event->sources[$i]);
        //             }
        //         }
        //     }
        // });

        // Set instance of this module
        self::$instance = $this;

        // Set alias for this module
        Craft::setAlias('@businesslogic', __DIR__);

        // Set the controllerNamespace based on whether this is a console or web request
        if (Craft::$app->getRequest()->getIsConsoleRequest()) {
            $this->controllerNamespace = 'businesslogic\\console\\controllers';
        } else {
            $this->controllerNamespace = 'businesslogic\\controllers';
        }


        // // Run parent init
        // parent::init();

        // // Register services
        // $this->setComponents([
        //     'example' => Example::class,
        // ]);

        // // Register variables
        // Event::on(
        //     CraftVariable::class,
        //     CraftVariable::EVENT_INIT,
        //     function (Event $event) {
        //         $variable = $event->sender;
        //         $variable->set('businessLogic', BusinessLogicVariable::class);
        //     }
        // );

        

    }

}