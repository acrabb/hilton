Hilton Reservations
by Andre Crabb

# Archtecture Choices

Starting with the navigation, even though this is a simple app, the stackNavigator is wrapped in a switchNavigator in case down the line we choose to add some sort of authenication, splash page, or some other branch of separate logic to the app.
The navigations folder contains the files related to navigation.

The components folder contains simple or app-wide components such as the navigation header.

The reservations folder contains files related to reservations. This includes the Reservations model class as well as the screens for this specific app. In a large org like Hilton, the models could be pulled out into their own module/library so as to be shared across multiple apps.

# Graph QL

Having never used Graph QL before, I found it very simple to get going once I figured out the javascript-side syntax. Its pretty cool and so developer-friendly.
Currently, the View Reservations screen reloads its data everytime (with caching). This may or may not be ideal based on the intended usage of the app itself. Because of this reloading, I didn't find a need to store the data returned by Graph QL into local state.
