# HubSpot-nodejs oauth sample app

This is a sample app for the [hubspot-php SDK](../../../../). Currently, this app focuses on demonstrating the functionality of [OAuth API](https://developers.hubspot.com/docs-beta/working-with-oauth) endpoints and their related actions.

  - [Using OAuth 2.0 access tokens](https://developers.hubspot.com/docs-beta/intro-to-auth)
  - [Get all contacts](https://developers.hubspot.com/docs-beta/crm/contacts)

Please see the documentation on [How do I create an app in HubSpot?](https://developers.hubspot.com/docs/faq/how-do-i-create-an-app-in-hubspot)

### Setup App

Make sure you have [Docker](https://www.docker.com/) installed.
Make sure you have [Docker Compose](https://docs.docker.com/compose/) installed.

### Configure

1. Copy .env.template to .env
2. Paste your HubSpot Client Id and HubSpot Client Secret as the value for HUBSPOT_CLIENT_ID and HUBSPOT_CLIENT_SECRET in .env

### Running

The best way to run this project (with the least configuration), is using docker cli.

```bash
docker-compose -f  ../../docker-compose-oauth.yml up --build
```
You should now be able to navigate to [http://localhost:3000](http://localhost:3000) and use the application.

### Testing
1. Copy .test-env.template to .test-env
2. Paste your HubSpot Apikey, HubSpot Client Id, HubSpot Client Secret, HubSpot Authorization email, HubSpot Authorization password 
and HubSpot Account Name as the value for HUBSPOT_API_KEY, HUBSPOT_CLIENT_ID, HUBSPOT_CLIENT_SECRET, HUBSPOT_AUTHORIZATION_EMAIL, 
HUBSPOT_AUTHORIZATION_PASSWORD and HUBSPOT_ACCOUNT_NAME in .env-test

```bash
docker-compose -f  ../../docker-compose-oauth-test.yml up --build
```
