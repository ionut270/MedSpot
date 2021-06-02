
# CC - 5

Homework 5 - Write a technical report that should contain the following documents:- a case study that reports the proposed project to the international/national reality
- technical details (architecture, technologies, marketing approaches) about existing solutions close to the one proposed by your team
- overview of technologies you wish to use and motivate your choices
- business canvas for the proposed solution
- architectural diagram for the proposed solution
- use-case diagrams for your project
- APIs (should be done in respect to the OpenApi specifications, using Swagger Hub) & functionality flows documentation

# Presentation


Medspot is a medical application whose purpose is to indicate its user's possible diagnoses for various symptoms.

We use google OAuth for authentication and express sessions for session storage.

For the first sign-in of a user, we will ask for an additional data set with a medical nature to provide more accurate diagnoses.

This additional data may be the date of birth, blood type, height, weight, etc.

After completing this additional data we can use the application.

The application has a self-diagnosis module where we can provide a set of symptoms based on which we will obtain a list with probable diagnoses.

The diagnosis module uses an API offered by apimedic.com based on concrete data that associates the set of symptoms introduced with a set of specific medical problems and information about them.
For now the application uses the sandbox mode of this API which, contains a smaller set of data, which is enough to demonstrate how it works.

After choosing a diagnosis, the user can check a list of medical specializations that he should visit for a more concrete diagnosis.
If the user clicks on one of these specializations, the maps module will be activated.
This performs a search using PlacesAPI and will return a list of the nearest medical offices in that field.

The user can then expand the information about the selected medical office.
This allows him to see a map with his current location and the location of the cabinet.

The application also has a posting module, in which it can ask questions of a medical nature to other users.
Other users can answer the question in the form of a comment.

Among the application modules, there is also a news feed.
This provides relevant information in the healthcare field.
The information in the news module can be extended to a website with more information about it.


# General idea

App to help people understand their simptoms

- The app should have geolocation access to retrieve a map & a list of nearby medical cabinets.
- Sort & search on specializations & availability.
- If a place is crowded recommend the next nearest place of the same type.


# Case study
In 2020 a pandemic hit the whole world, requiring people to do something called social distancing .
This arose the need of apps that can manage schedules & appointments more than ever.
This apps is meant to provide a general solution that can be used in a widespread domain to help different businesses & medical clinics manage their clients.
  

A general case study on the matter of social distancing can provide a better overview over the problem.

> As the spread of COVID19 in the US continues to grow, local and state
> officials face difficult decisions about when and how to transition to
> a “new normal.” The goal of this study is to project the number of
> COVID19 infections and resulting severe outcomes, and the need for
> hospital capacity under social distancing, particularly,
> shelter-in-place and voluntary quarantine for the State of Georgia. We
> developed an agent-based simulation model to project the infection
> spread. The model utilizes COVID19-specific parameters and data from
> Georgia on population interactions and demographics. The simulation
> study covered a seven and a half-month period, testing different
> social distancing scenarios, including baselines (no-intervention or
> school closure only) and combinations of shelter-in-place and
> voluntary quarantine with different timelines and compliance levels.
> The following outcomes are compared at the state and community levels:
> the number and percentage of cumulative and daily new symptomatic and
> asymptomatic infections, hospitalizations, and deaths; COVID19-related
> demand for hospital beds, ICU beds, and ventilators. The results
> suggest that shelter-in-place followed by voluntary quarantine reduced
> peak infections from approximately 180K under no intervention and 113K
> under school closure, respectively, to below 53K, and delayed the peak
> from April to July or later. Increasing shelter-in-place duration from
> four to five weeks yielded 2–9% and 3–11% decrease in cumulative
> infection and deaths, respectively. Regardless of the shelter-in-place
> duration, increasing voluntary quarantine compliance decreased daily
> new infections from almost 53K to 25K, and decreased cumulative
> infections by about 50%. The cumulative number of deaths ranged from
> 6,660 to 19,430 under different scenarios. Peak infection date varied
> across scenarios and counties; on average, increasing shelter-in-place
> duration delayed the peak day by 6 days. Overall, shelter-in-place
> followed by voluntary quarantine substantially reduced COVID19
> infections, healthcare resource needs, and severe outcomes.
>
> *Source [The impact of social distancing on COVID19 spread: State of Georgia case study
> (plos.org)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0239798)*

  

# Technical details

**Who is this app for?**

The app is for the users that want to protect themselves from the spread of the virus by reducing needless visits to the medic.

**On which devices can they use your application**
Web browser & Mobile

**When do you want to get your mobile application finished?**
After the core Web browser app is fully functional.

# Tech overview

Rest API based nodeJS app with microservices & React for frontend.

The app should use Google maps along with the geolocation API to determine and retrieve a list of available cabinets around the user.
The server will handle that list & determine which cabinets are currently available or overcrowded.

The user app uses the geolocation API & maps API to render a nice looking map with the available cabinet.
The authentication of the user app is performed using the CNP of the user & a code that will be sent trough email or phone message to perform the auth.

# Architectural diagrams

# Use case diagrams

# Api - (openAPI & Swagger Hub)
