<script setup>
  const request = {
    // ----- CHANGE ME! -----
    // [REQUIRED] Url for development server endpoint
    baseUrl: "http://vuefinder-php.test",
    // ----- CHANGE ME! -----

    // Additional headers & params & body
    headers: { "X-ADDITIONAL-HEADER": 'yes' },
    params: { additionalParam1: 'yes' },
    body: { additionalBody1: ['yes'] },

    // And/or transform request callback
    transformRequest: req => {
      if (req.method === 'get') {
        req.params.vf = "1"
      }
      return req;
    },

    // XSRF Token header name
    xsrfHeaderName: "X-CSRF-TOKEN",
  }

  // other codes

  const handleSelectButton = {
    // show select button
    active: true,
    // allow multiple selection
    multiple: false,
    // handle click event
    click: (items, event) => {
      if (!items.length) {
        alert('No item selected');
        return;
      }
      alert('Selected: ' + items[0].path);
      console.log(items, event);
    }
  }
</script>

<template>
  <div>
      <vue-finder id='my_vuefinder' :request="request"></vue-finder>
  </div>
</template>

<vue-finder
  id='my_vuefinder'
  :request="request"
  :select-button="handleSelectButton"
/>

<style scoped>
</style>
