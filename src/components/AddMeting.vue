<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="client">Cliënt naam</label>
        <input
          type="text"
          class="form-control"
          id="client"
          required
          v-model="meting.client"
          name="client"
        />
      </div>

      <div class="form-group">
        <label for="prismaflipper6m">Prismaflipper op 6m</label>
        <input
          type="number"
          class="form-control"
          id="prismaflipper6m"
          required
          v-model="meting.prismaflipper6m"
          name="prismaflipper6m"
        >
      </div>

            <div class="form-group">
        <label for="bt">BT</label>
        <input
          type="number"
          class="form-control"
          id="bt"
          required
          v-model="meting.bt"
          name="bt"
        />
      </div>


      <div class="form-group">
        <label for="bn">BN</label>
        <input
          type="number"
          class="form-control"
          id="bn"
          required
          v-model="meting.bn"
          name="bn"
        />
      </div>

      <div class="form-group">
        <label for="prismaflipper40cm">Prismaflipper40cm</label>
        <input
          type="number"
          class="form-control"
          id="prismaflipper40cm"
          required
          v-model="meting.prismaflipper40cm"
          name="prismaflipper40cm"
        />
      </div>


      <div class="form-group">
        <label for="moeite">Meeste moeite</label>
        <input
          type="text"
          class="form-control"
          id="moeite"
          required
          v-model="meting.moeite"
          name="moeite"
        />
      </div>

      <v-btn @click="saveMeting" class="btn btn-success">Submit</v-btn>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <v-btn class="btn btn-success" @click="newMeting">Add</v-btn>
    </div>
  </div>
</template>

<script>
import MetingDataService from "../services/MetingDataService";

export default {
  name: "add-meting",
  data() {
    return {
      meting: {
        client: "",
        prismaflipper6m: "",
        bt: "",
        bn: "",
        prismaflipper40cm: "",
        moeite: "",
      },
      submitted: false
    };
  },
  methods: {
    saveMeting() {
      var data = {
        client: this.meting.client,
        prismaflipper6m: this.meting.prismaflipper6m,
        bt: this.meting.bt,
        bn: this.meting.bn,
        prismaflipper40cm: this.meting.prismaflipper40cm,
        moeite: this.meting.moeite,
      };

      MetingDataService.create(data)
        .then(() => {
          console.log("Created new meting successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newMeting() {
      this.submitted = false;
      this.meting = {
        client: "",
        prismaflipper6m: "",
        bt: "",
        bn: "",
        prismaflipper40cm: "",
        moeite: "",
        published: false
      };
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
