Introduction
============

*DISCLAIMER: Unlike the rest of the content in these docs, the page you're currently viewing contains generalized information that is true for all **DataSource by Bocks** iterations.*

*NOTE: Several points in this article encourage you, the reader of this page, to reach out to us. To do so, please submit a form on our home page (bocksdatasource.com), or send an email directly to support (at) bocksdatasource.com (email obfuscated to reduce bot-spam crowding out your messages;)*

Overview
********

We intend DataSource to be your one-stop shop for your SRD content. We utilize our partnerships to provide you with the most accurate and up-to-date information for every title that we support.

In coming months, we will be adding new *DataSource* products for as many titles as there is demand for. Review the secion of this page titled "Roadmap" to see if your favorite title is coming soon.

If you would love to use *DataSource* to build an SRD, but you don't see your title on our Roadmap *please* reach out to us immediately. Some select titles on our list are there strictly based on their overall popularity, but we will triage and prioritize our product releases based on whether someone is ready and waiting to use it. If that's you, let us know!

*****


Design Decisions
****************

**Regarding REST vs GraphQL**

*DataSource* is a GraphQL API. This decision was made based on the simplicity and scalability of that technology compared to a traditional REST API. On top of the API development and maintenance being lightened, this also enables us to build SDKs for users more quickly and efficiently. The average *DataSource* consumer will access our data via an SDK, which will make the REST vs GraphQL discussion moot at that point because your API calls will be wrapped by a nice layer of simplification. The *DataSource* application UI is built using ApolloServer.

**Regarding SDKs**

Our intention is for *DataSource* to be accessed programatically. Our roadmap projects releases of SDKs for most major languages in the near future, which will make building your website with *DataSource* a breeze. If we don't have an SDK for your favorite language on our roadmap, please let us know immediately so that we may prioritize our development accordingly.

**Regarding Scalability**

From its inception, *DataSource* has been built with scalability in mind. This is no trivial matter for us, as the reduction in maintenance and development time directly effect our business model. 
Users should be encouraged by this for several reasons:

- Our scalable design means we'll stay in business indefintely, getting better with each passing day. You can rest assured that we aren't going anywhere!
- Limiting our development costs (in both time and money) means we can invest more (time and money) into new features and new data sets for you as the user!
- Because all *DataSource* iterations are extensions of our core repository, all of our products will recieve patches, fixes, and new features simultaneously!
- If the user of another title has a great idea (or finds a bug) all other titles will benefit from it!
- All documentation is automated based on the data in the application. If a change is made to the *DataSource* data, you don't need to worry about whether or not a human has updated this page!

*****

Roadmap
*******

- Data improvements
  - Currently we are investigating the completeness of our database. We are looking to learn from existing SDK developers to ensure that our product meets your expectations. If you have input or advice to give, please open up dialog with us!
- Scalable SDKs
  - These SDKs will be designed to use a core code repository that makes logic scalable for all future *DataSource* iterations.
  - The order of development may change based on demand.
  - We will add or prioritize SDK development on a first-come-first-served-basis of requests from potential users.
  - Future SDK languages include: *Python, Javascript/NodeJS/React, Ruby/Rails, PHP, C#/.NET, C++_
- Datasets
  - Dataset(s) currently released or anticipating release: *Starfinder, Pathfinder_
  - Upcoming datasets: *D&D5e, Call of Cthulu_
