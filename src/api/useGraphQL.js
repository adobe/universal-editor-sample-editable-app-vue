/*
All Rights Reserved.
Copyright 2023 Adobe
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import { ref } from 'vue';
import { getAuthorHost } from "../utils/fetchData";

const { AEMHeadless } = require('@adobe/aem-headless-client-js')
const { VUE_APP_GRAPHQL_ENDPOINT } = process.env;

/**
 * Custom React Hook to perform a GraphQL query
 * @param path - Persistent query path
 * @param variables - Persistent query variables
 */
function useGraphQL(path, variables = {}) {
  const result = ref(null);

  const sdk = new AEMHeadless({
    serviceURL: getAuthorHost(),
    endpoint: VUE_APP_GRAPHQL_ENDPOINT
  });
  const request = sdk.runPersistedQuery.bind(sdk);

  function executeQuery() {
    return request(path, variables, { credentials: 'include' })
      .then(response => {
        if (response.data) {
          result.value = response.data;
        }
      })
      .catch(error => {
        console.log('Error retrieving ' + path, error);
        result.value = null;
      });
  }

  return {
    result,
    executeQuery
  };
}

export default useGraphQL;
