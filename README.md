![alt text](https://drive.google.com/uc?id=1Sqr78CiTLUi-9eIbLZ5CT_KL1bxx1P2Y)

# Weather App made with React

This app lets you explore weather conditions all around the world. It's based on the Open Weather Map API. Once you've searched for the desired city, a list of matches will appear with it current weather and, if you click on one of them, you can access its details and forecast for the next five days.

## How does it work?

After the search input is received, this is compared with the list of all the cities in the database and only the matches are returned. Then the conditions for these matches are saved to the central store and displayed on screen.

When one of the items is clicked, the router redirects the user to a URL matching that location's ID. This is passed to the API and the place's data is fetched, showing then the present weather conditions and the future ones for the next 5 days.

The drawback here is that the API doesn't provide a list of matches when you search for a city, instead, a JSON is given to the developer so he can iterate through it and find the matches. This JSON file's size is over 28MB though, so it heavily slows down the loading of the page.

## Which technologies does it use?

React is at the base of it all. For storing search data, Redux was used. URL matters where managed using React Router.
