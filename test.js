mergeInto(LibraryManager.library, {

  // Create a new function with the same name as
  // the event listeners name and make sure the
  // parameters match as well.

 LogOutMessageToReact: function(message) {

    // Within the function we're going to trigger
    // the event within the ReactUnityWebGL object
    // which is exposed by the library to the window.

    ReactUnityWebGL.LogOutMessageToReact(message);
  }

  PositionUpdate: function(index, vec3){
    ReactUnityWebGL.PositionUpdate(index, vec3)
  }

});
