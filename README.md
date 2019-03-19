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

# Unit Testing

Not knowing best practices for javascript tests, I added some tests for business logic.
It looks like Jest has a way to test the UI with snapshots which new to me and seems pretty cool. For the sake of moving forward with this project, I'll skip that and only focus on business logic for CreateReservation.

Historically, companies I've been in haven't tested UI logic. Maybe it makes more sense to do so in React Native.
Knowing how much design teams can change their minds (in my experience), if it _did_ make sense to test the UI, then writing that logic after a design sign-off or very very close to release would make sense.

Happy to learn this though!
