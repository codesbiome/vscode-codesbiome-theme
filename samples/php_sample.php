<?php

namespace Codesbiome\Vscode\Theme;

use Exception;

interface ActiveController
{
    public static function first($param1, $param2 = false);
    public function second(Exception $exception, $number = 23);
}

class Controller implements ActiveController
{
    /**
     * First Field
     *
     * @var array
     */
    public static $first = [];
    /**
     * Second Field
     *
     * @var integer
     */
    public $second = 123;

    /**
     * A Perfect Constant
     */
    const PERFECT_CONSTANT = 'codesbiome';

    /**
     * Constructor Method
     */
    public function __construct()
    {
        // This is slashed comment
        $this->second = $this->setSecond();
    }

    /**
     * Second Method
     *
     * @return void
     */
    private function setSecond(): float
    {
        /** This is multiline comment */
        return microtime(true);
    }

    /**
     * This is documentation of this method
     *
     * @param string $param1    Normal String
     * @return void
     */
    public function setOutput($param1): void
    {
        foreach (['first', 'second', 'third'] as $item) {
            $item = $item . DIRECTORY_SEPARATOR . "folder" . $param1;
            $item = dirname(__DIR__) . __LINE__ . $item;
            echo $item . Controller::PERFECT_CONSTANT;
        }
    }

    /**
     * First Method of class
     *
     * @param [type] $param1    Parameter number 1
     * @param boolean $param2   Parameter number 2
     * @return void
     */
    public static function first($param1, $param2 = false): string
    {
        return $param1 . (string) $param2;
    }

    /**
     * Second method of class
     *
     * @param Exception $exception  Exception Instance
     * @param int $number        A normal number
     * @return void
     */
    public function second(Exception $exception, int $number): string
    {
        return $exception->getMessage($number);
    }
}
