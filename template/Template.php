<?php

namespace eshop\template;

class Template
{
    // template path
    protected $template_path;

    // to store variables
    protected $vars = array();

    public function __construct($path)
    {
        $this->template_path = $path;
    }

    // get variables
    public function __get($key)
    {
        return $this->vars[$key];
    }

    // set variables
    public function __set($key,$value)
    {
        $this->vars[$key] = $value;
    }

    // print template
    public function __toString()
    {
        extract($this->vars);
        chdir(dirname($this->template_path));
        ob_start();

        include basename($this->template_path);

        return ob_get_clean();
    }
}