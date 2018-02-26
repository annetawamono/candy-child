<?php

function wp_child_enqueue_scripts() {
	wp_register_style( 'childstyle', get_stylesheet_directory_uri() . '/style.css'  );
	wp_enqueue_style( 'childstyle' );
}
add_action( 'wp_enqueue_scripts', 'wp_child_enqueue_scripts');

function my_custom_javascript() {
	wp_register_script('myjquery', get_stylesheet_directory_uri().'/js/jquery-2.1.1.min.js', array('jquery'), '2.1.1');
	wp_enqueue_script( 'myjquery' );
    wp_register_script('myscript', get_stylesheet_directory_uri().'/js/script-parallax.js', array('jquery'), '1.0.0');
	wp_enqueue_script( 'myscript' );
	wp_register_script('myscript2', get_stylesheet_directory_uri().'/js/header.js', array('jquery'), '1.0.0');
	wp_enqueue_script( 'myscript2' );
	wp_register_script('myscript3', get_stylesheet_directory_uri().'/js/fontawesome-all.min.js', array('jquery'), '1.0.0');
	wp_enqueue_script( 'myscript3' );
}
add_action('wp_enqueue_scripts','my_custom_javascript');

?>