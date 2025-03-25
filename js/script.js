// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Calculates area and perimeter equation.
 */
function doMathClicked() {
  document.getElementById("calculate-area").innerHTML = 
    "<p>The area is:" + 5 * 3 + " cm² </p>"
  document.getElementById("calculate-perimeter").innerHTML = 
    "<p>The perimeter is:" + 2 * (5 + 3) + " cm </p>"
}
