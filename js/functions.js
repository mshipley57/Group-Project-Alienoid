//
// Container protoype //
//
Array.prototype.contains = function(commands) {
  return this.indexOf(commands) > -1;
}

var reset = function() {
  location.reload();
}
var commands = function() {
  ("ul#commandsList").slideToggle();
}

//
// End of prototype //
//

//
// Stage one if statement //
//
var stage1 = function(input) {
  if (bedCommands1.contains(input)) {
  $("h5").text(stageOne.bedDescript);
  $("ul#gameLog").append(stageOne.bedDescript);
  $("#userInputText").val("");
  } else if (help1.contains(input)) {
  $("h5").text(stageOne.roomDescript);
  $("#userInputText").val("");
} else if (hitWindow.contains(input)) {
  $("body").removeClass();
  $("#gameTextPanel").hide();
  $("#gameOverPanel").show();
  $("#gameOverText").text(stageOne.windowHit);
  $("ul#gameLog").append(stageOne.windowHit);
  $("#userInputText").hide();
  } else if (closetCommands1.contains(input)) {
  $("h5").text(stageOne.closetExteriorDescript);
  $("ul#gameLog").append(stageOne.closetExteriorDescript);
  $("#userInputText").val("");
  } else if (dresserCommands1.contains(input)) {
  $("h5").text(stageOne.dresserDescript);
  $("ul#gameLog").append(stageOne.dresserDescript);
  $("#userInputText").val("");
  } else if (closetButton1.contains(input)) {
  $("h5").text(stageOne.closetButton);
  $("ul#gameLog").append(stageOne.closetButton);
  $("#userInputText").val("");
  } else if (closetInterior1.contains(input)) {
  $("h5").text(stageOne.closetInteriorDescript);
  $("ul#gameLog").append(stageOne.closetInteriorDescript);
  $("#userInputText").val("");
  } else if (windowCommands1.contains(input)) {
  $("h5").text(stageOne.windowDescript);
  $("ul#gameLog").append(stageOne.windowDescript);
  $("#userInputText").val("");
  } else if (doorCommands1.contains(input)) {
  $("h5").text(stageOne.doorDescript);
  $("ul#gameLog").append(stageOne.doorDescript);
  $("#userInputText").val("");
  } else if (deskCommands1.contains(input)) {
  $("h5").text(stageOne.deskDescript);
  $("ul#gameLog").append(stageOne.deskDescript);
  $("#userInputText").val("");
  } else if (dresserInt.contains(input)) {
  $("h5").text(stageOne.dresserInt);
  $("ul#gameLog").append(stageOne.dresserInt);    $("#userInputText").val("");
  } else if (screenCommands1.contains(input)) {
  $("h5").text(stageOne.screenDescript);
  $("ul#gameLog").append(stageOne.screenDescript);
  $("#userInputText").val("");
  } else if (help1.contains(input)) {
  $("h5").text(backObject.backDescript);
  $("#userInputText").val("");
  } else if (stageOneSleep1.contains(input)) {
  $("h5").text(stageOne.stageOneSleep);
  $("ul#gameLog").append(stageOne.stageOneSleep);
  $("#userInputText").val("");
  level++;
  } else {
    $("h5").text("COMMAND NOT RECOGNIZED");
    $("#userInputText").val("");
  }
}
//
// End of stage 1 statement //
//


//
// Stage 2 if statement //
//
var stage2 = function(input) {
  if (stageTwoWakeUp.contains(input)) {
  $("h5").text(stageTwo.wakeUpDescript);
  $("ul#gameLog").append(stageTwo.wakeUpDescript);
  $("#userInputText").val("");
} else if (bedCommands2.contains(input)) {
  $("h5").text(stageTwo.bedDescript);
  $("ul#gameLog").append(stageTwo.bedDescript);
  $("#userInputText").val("");
} else if (hitWindow.contains(input)) {
  $("body").removeClass();
  $("#gameTextPanel").hide();
  $("#gameOverPanel").show();
  $("#gameOverText").text(stageOne.windowHit);
  $("ul#gameLog").append(stageOne.windowHit);
  $("#userInputText").hide();
} else if (help2.contains(input)) {
  $("h5").text(stageTwo.helpDescript);
  $("#userInputText").val("");
} else if (closetCommands2.contains(input)) {
  $("h5").text(stageTwo.closetExteriorDescript);
  $("ul#gameLog").append(stageTwo.closetExteriorDescript);
  $("#userInputText").val("");
} else if (dresserCommands2.contains(input)) {
  $("h5").text(stageTwo.dresserDescript);
  $("ul#gameLog").append(stageTwo.dresserDescript);
  $("#userInputText").val("");
} else if (windowCommands2.contains(input)) {
  $("h5").text(stageTwo.windowDescript);
  $("ul#gameLog").append(stageTwo.windowDescript);
  $("#userInputText").val("");
} else if (doorCommands2.contains(input)) {
  $("h5").text(stageTwo.doorDescript);
  $("ul#gameLog").append(stageTwo.doorDescript);
  $("#userInputText").val("");
} else if (deskCommands2.contains(input)) {
  $("h5").text(stageTwo.deskDescript);
  $("ul#gameLog").append(stageTwo.deskDescript);
  $("#userInputText").val("");
} else if (screenCommands2.contains(input)) {
  $("h5").text(stageTwo.screenDescript);
  $("ul#gameLog").append(stageTwo.screenDescript);
  $("#userInputText").val("");
} else if (medKitCommands2.contains(input)) {
  $("h5").text(stageTwo.medKitDescript);
  $("ul#gameLog").append(stageTwo.medKitDescript);
  $("#userInputText").val("");
} else if (closetButton2.contains(input)) {
  $("h5").text(stageTwo.closetButton);
  $("ul#gameLog").append(stageTwo.closetButton);
  $("#userInputText").val("");
} else if (closetInterior2.contains(input)) {
  $("h5").text(stageTwo.closetInteriorDescript);
  $("ul#gameLog").append(stageTwo.closetInteriorDescript);
  $("#userInputText").val("");
} else if (pickUpSyringe.contains(input)) {
  $("h5").text(stageTwo.syringeDescript);
  $("ul#gameLog").append(stageTwo.syringeDescript);
  $("#userInputText").val("");
  inventory.push("syringe");
} else if (useSyringeStage2.contains(input)) {
  $("body").removeClass();
  $("#gameTextPanel").hide();
  $("#gameOverPanel").show();
  $("#gameOverText").text(stageTwo.syringeUseDescript);
  $("ul#gameLog").append(stageTwo.syringeUseDescript);
  $("#userInputText").hide();
} else if (stageTwoSleep2.contains(input)) {
  $("h5").text(stageTwo.stageTwoSleep);
  $("ul#gameLog").append(stageTwo.stageTwoSleep);
  $("#userInputText").val("");
  level++;
} else if (doorCommands2.contains(input)) {
  $("h5").text(stageTwo.doorDescript);
  $("ul#gameLog").append(stageTwo.doorDescript);
  $("#userInputText").val("");
} else {
    $("h5").text("COMMAND NOT RECOGNIZED");
    $("#userInputText").val("");
  }
}

//
// End of stage 2 statement //
//


//
// Stage 3 if statement //
//
var stage3 = function(input) {
  if (stageThreeWakeUp.contains(input)) {
  $("h5").text(stageThree.wakeUpDescript);
  $("#userInputText").val("");
  $("ul#gameLog").append(stageThree.wakeUpDescript);
} else if (bedCommands3.contains(input)) {
  $("h5").text(stageThree.bedDescript);
  $("ul#gameLog").append(stageThree.bedDescript);
  $("#userInputText").val("");
} else if (help3.contains(input)) {
  $("h5").text(stageThree.helpDescript);
  $("#userInputText").val("");
} else if (hitWindow.contains(input)) {
  $("body").removeClass();
  $("#gameTextPanel").hide();
  $("#gameOverPanel").show();
  $("#gameOverText").text(stageOne.windowHit);
  $("ul#gameLog").append(stageOne.windowHit);
  $("#userInputText").hide();
} else if (help3.contains(input)) {
  $("h5").text(backObject.backDescript);
  $("#userInputText").val("");
} else if (closetCommands3.contains(input)) {
  $("h5").text(stageThree.closetExteriorDescript);
  $("ul#gameLog").append(stageThree.closetExteriorDescript);
  $("#userInputText").val("");
} else if (dresserCommands3.contains(input)) {
  $("h5").text(stageThree.dresserDescript);
  $("ul#gameLog").append(stageThree.dresserDescript);
  $("#userInputText").val("");
} else if (windowCommands3.contains(input)) {
  $("h5").text(stageThree.windowDescript);
  $("ul#gameLog").append(stageThree.windowDescript);
  $("#userInputText").val("");
} else if (doorCommands3.contains(input)) {
  $("h5").text(stageThree.doorDescript);
  $("ul#gameLog").append(stageThree.doorDescript);
  $("#userInputText").val("");
} else if (deskCommands3.contains(input)) {
  $("h5").text(stageThree.deskDescript);
  $("ul#gameLog").append(stageThree.deskDescript);
  $("#userInputText").val("");
} else if (screenCommands3.contains(input)) {
  $("h5").text(stageThree.screenDescript);
  $("ul#gameLog").append(stageThree.screenDescript);
  $("#userInputText").val("");
} else if (medKitCommands3.contains(input)) {
  $("h5").text(stageThree.medKitDescript);
  $("ul#gameLog").append(stageThree.medKitDescript);
  $("#userInputText").val("");
} else if (syringeStage3.contains(input)) {
  $("h5").text(stageThree.syringeDescript);
  $("ul#gameLog").append(stageThree.syringeDescript);
  $("#userInputText").val("");
} else if (closetButton3.contains(input)) {
  $("h5").text(stageThree.closetButton);
  $("ul#gameLog").append(stageThree.closetButton);
  $("#userInputText").val("");
} else if (closetInterior3.contains(input)) {
  $("h5").text(stageThree.closetInteriorDescript);
  $("ul#gameLog").append(stageThree.closetInteriorDescript);
  $("#userInputText").val("");
} else if (useSyringeStage3.contains(input)) {
  $("body").removeClass();
  $("#gameTextPanel").hide();
  $("#gameOverPanel").show();
  $("#gameOverText").text(stageThree.useSyringeStage3);
  $("ul#gameLog").append(stageOne.useSyringeStage3);
  $("#userInputText").hide();
  $("#userInputText").val("");
} else if (vent3.contains(input)) {
  $("h5").text(stageThree.ventDescript);
  $("ul#gameLog").append(stageThree.ventDescript);
  $("#userInputText").val("");
} else if (openVent3.contains(input)) {
  $("h5").text(stageThree.ventOpenDescript);
  $("ul#gameLog").append(stageThree.ventOpenDescript);
  $("#userInputText").val("");
} else if (stageThreeSleep3.contains(input)) {
  $("h5").text(stageThree.stageThreeSleep);
  $("ul#gameLog").append(stageThree.stageThreeSleep);
  $("#userInputText").val("");
  level++;
  } else {
    $("h5").text("COMMAND NOT RECOGNIZED");
    $("#userInputText").val("");
  }
}
//
// End of stage 3 statement //
//


//
// Stage 4 if statement //
//
var stage4 = function(input) {
  if (stage4WakeUp.contains(input)) {
  $("h5").text(stageFour.wakeUpDescript);
  $("#userInputText").val("");
  $("ul#gameLog").append(stageFour.wakeUpDescript);
} else if (bedCommands4.contains(input)) {
  $("h5").text(stageFour.bedDescript);
  $("ul#gameLog").append(stageFour.bedDescript);
  $("#userInputText").val("");
} else if (help4.contains(input)) {
  $("h5").text(stageFour.helpDescript);
  $("#userInputText").val("");
} else if (hitWindow.contains(input)) {
  $("body").removeClass();
  $("#gameTextPanel").hide();
  $("#gameOverPanel").show();
  $("#gameOverText").text(stageOne.windowHit);
  $("ul#gameLog").append(stageOne.windowHit);
  $("#userInputText").hide();
} else if (closetCommands4.contains(input)) {
  $("h5").text(stageFour.closetExteriorDescript);
  $("ul#gameLog").append(stageFour.bedDescript);
  $("#userInputText").val("");
} else if (dresserCommands4.contains(input)) {
  $("h5").text(stageFour.dresserDescript);
  $("ul#gameLog").append(stageFour.dresserDescript);
  $("#userInputText").val("");
  level++;
} else if (windowCommands4.contains(input)) {
  $("h5").text(stageFour.windowDescript);
  $("ul#gameLog").append(stageFour.windowDescript);
  $("#userInputText").val("");
} else if (doorCommands4.contains(input)) {
  $("h5").text(stageFour.doorDescript);
  $("ul#gameLog").append(stageFour.doorDescript);
  $("#userInputText").val("");
  level++;
} else if (deskCommands4.contains(input)) {
  $("h5").text(stageFour.deskDescript);
  $("ul#gameLog").append(stageFour.deskDescript);
  $("#userInputText").val("");
} else if (screenCommands4.contains(input)) {
  $("h5").text(stageFour.screenDescript);
  $("ul#gameLog").append(stageFour.screenDescript);
  $("#userInputText").val("");
} else if (medKitCommands4.contains(input)) {
  $("h5").text(stageFour.medKitDescript);
  $("ul#gameLog").append(stageFour.medKitDescript);
  $("#userInputText").val("");
} else if (syringeStage4.contains(input)) {
  $("h5").text(stageFour.syringeDescript);
  $("ul#gameLog").append(stageFour.syringeDescript);
  $("#userInputText").val("");
} else if (closetButton4.contains(input)) {
  $("h5").text(stageFour.closetButton);
  $("ul#gameLog").append(stageFour.closetButton);
  $("#userInputText").val("");
} else if (closetInterior4.contains(input)) {
  $("h5").text(stageFour.closetInteriorDescript);
  $("ul#gameLog").append(stageFour.closetInteriorDescript);
  $("#userInputText").val("");
  level++;
} else if (useSyringeStage4.contains(input)) {
  $("h5").text(stageFour.syringeUseDescript);
  $("ul#gameLog").append(stageFour.syringeUseDescript);
  $("#userInputText").val("");
} else if (sleep.contains(input)){
    $("h5").text("YOU CAN'T SLEEP NOW!");
    $("#userInputText").val("");
  }
}
//
// End of stage 4 statement //
//

////////////
// Turn 1 //
///////////
var stage5 = function(input) {
  if (moveCounter === 1) {
    console.log(moveCounter);
    if (bedCommands5Turn1.contains(input)) {
      console.log(moveCounter);
    $("h5").text(stageFive.bedDescript5 + "// FOUR MORE MOVES UNTIL DEATH //");
    $("ul#gameLog").append(stageFive.bedDescript5);
    $("#userInputText").val("");
    moveCounter++;
    console.log(moveCounter);
  } else if(deskCommands5.contains(input)) {
    $("h5").text(stageFive.deskDescript5Turn1 + "// FOUR MORE MOVES UNTIL DEATH //");
    $("ul#gameLog").append(stageFive.deskDescript5Turn1);
    $("#userInputText").val("");
    moveCounter++;
  } else if (help5.contains(input)) {
    $("h5").text(stageFive.helpDescript + "// FOUR MORE MOVES UNTIL DEATH //");
    $("#userInputText").val("");
  } else if (dresserInt.contains(input)) {
    $("h5").text(stageOne.dresserInt);
    $("ul#gameLog").append(stageOne.dresserInt);
    $("#userInputText").val("");
  } else if (hitWindow.contains(input)) {
    $("body").removeClass();
    $("#gameTextPanel").hide();
    $("#gameOverPanel").show();
    $("#gameOverText").text(stageOne.windowHit);
    $("ul#gameLog").append(stageOne.windowHit);
    $("#userInputText").hide();
  } else if (kill.contains(input)) {
    $("body").removeClass();
    $("#gameTextPanel").hide();
    $("#gameOverPanel").show();
    $("#gameOverText").text(stageFive.kill5);
    $("ul#gameLog").append(stageFive.kill5);
    $("#userInputText").hide();
  } else if (windowCommands5.contains(input)) {
    $("h5").text(stageFive.windowTurn1Descript + "// FOUR MORE MOVES UNTIL DEATH //");
    $("ul#gameLog").append(stageFive.windowTurn1Descript);
    $("#userInputText").val("");
    moveCounter++;
  } else if (closetCommands5.contains(input)) {
    $("h5").text(stageFive.closetTurnOne5 + "// FOUR MORE MOVES UNTIL DEATH //");
    $("ul#gameLog").append(stageFive.closetTurnOne5);
    $("#userInputText").val("");
    moveCounter++;
  } else if (run.contains(input)) {
    $("h5").text(stageFive.run);
  } else {
    $("h5").text("COMMAND NOT RECOGNIZED // FOUR MORE MOVES UNTIL DEATH //");
    $("#userInputText").val("");
  }


  ////////////
  // Turn 2 //
  ///////////
} else if (moveCounter === 2) {
    if (bedCommands5Turn2.contains(input)) {
    $("h5").text(stageFive.bedDescript5Turn2 + "// THREE MORE MOVES UNTIL DEATH //");
    $("ul#gameLog").append(stageFive.bedDescript5Turn2);
    $("#userInputText").val("");
    moveCounter++;
  } else if (help5.contains(input)) {
    $("h5").text(stageFive.helpDescript);
    $("#userInputText").val("");
    } else if (windowCommands5.contains(input)) {
      $("body").removeClass();
      $("#gameTextPanel").hide();
      $("#gameOverPanel").show();
      $("#gameOverText").text(stageFive.windowTurn2Descript);
      $("ul#gameLog").append(stageFive.windowTurn2Descript);
      $("#userInputText").hide();
    $("#userInputText").val("");
    } else if (kill.contains(input)) {
    $("h5").text(stageFive.kill5);
    $("ul#gameLog").append(stageFive.kill5);
    $("#userInputText").val("");
    moveCounter++;
  } else if (hitWindow.contains(input)) {
    $("body").removeClass();
    $("#gameTextPanel").hide();
    $("#gameOverPanel").show();
    $("#gameOverText").text(stageOne.windowHit);
    $("ul#gameLog").append(stageOne.windowHit);
    $("#userInputText").hide();
    } else if (syringeStage5.contains(input)) {
    $("h5").text(stageFive.syringeGrab5 + "// THREE MORE MOVES UNTIL DEATH //");
    $("ul#gameLog").append(stageFive.syringeGrab5);
    $("#userInputText").val("");
    moveCounter++;
  } else if (closetCommands5.contains(input)) {
    $("h5").text(stageFive.closetTurnTwo5 + "// THREE MORE MOVES UNTIL DEATH //");
    $("ul#gameLog").append(stageFive.closetTurnTwo5);
    $("#userInputText").val("");
  } else if (closetInterior5.contains(input)) {
    $("h5").text(stageFive.closetTurnTwo5 + "// THREE MORE MOVES UNTIL DEATH //");
    $("ul#gameLog").append(stageFive.closetTurnTwo5);
    $("#userInputText").val("");
  } else if (run.contains(input)) {
    $("h5").text(stageFive.run);
  } else {
    $("h5").text("COMMAND NOT RECOGNIZED // THREE MORE MOVES UNTIL DEATH //");
    $("#userInputText").val("");
  }

  /////////////
  // turn 3 //
  ////////////
  } else if (moveCounter === 3) {
    if (killWith.contains(input)) {
    $("body").removeClass();
    $("#gameTextPanel").hide();
    $("#winPanel").show();
    $("#winText").text(stageFive.killWith5Turn2);
    $("ul#gameLog").append(stageFive.killWith5Turn2);
    $("#userInputText").hide();
    moveCounter++;
  } else if (kill.contains(input)) {
    $("body").removeClass();
    $("#gameTextPanel").hide();
    $("#winPanel").show();
    $("#winText").text(stageFive.killWith5Turn2);
    $("ul#gameLog").append(stageFive.killWith5Turn2);
    $("#userInputText").hide();
    moveCounter++;
  } else if (hitWindow.contains(input)) {
    $("body").removeClass();
    $("#gameTextPanel").hide();
    $("#gameOverPanel").show();
    $("#gameOverText").text(stageOne.windowHit);
    $("ul#gameLog").append(stageOne.windowHit);
    $("#userInputText").hide();
  } else if (bedCommands5Turn2.contains(input)) {
    $("h5").text(stageFive.bedDescript5Turn2 + "// THREE MORE MOVES UNTIL DEATH //");
    $("ul#gameLog").append(stageFive.bedDescript5Turn2);
    $("#userInputText").val("");
    moveCounter++;
  } else if (run.contains(input)) {
    $("h5").text(stageFive.run);
  } else {
      $("h5").text("COMMAND NOT RECOGNIZED // THREE MORE MOVES UNTIL DEATH //");
      $("#userInputText").val("");
    }
  } else if (moveCounter > 4) {
    $("body").removeClass();
    $("#gameTextPanel").hide();
    $("#gameOverPanel").show();
    $("#gameOverText").text("In your frantic attempt to fight the alien, you seem to have forgotten to actually kill it. You were too slow and it swallowed you whole.");
    $("ul#gameLog").append("In your frantic attempt to fight the alien, you seem to have forgotten to actually kill it. You were too slow and it swallowed you whole.");
    $("#userInputText").hide();
}
}
