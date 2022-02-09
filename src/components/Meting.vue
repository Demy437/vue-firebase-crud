<template>
<div v-if="currentMeting" class="edit-form">
    <h4>Meting</h4>
    <form>
      <div class="form-group">
        <label for="client">Cliënt   </label>
        <input
          type="text"
          class="form-control"
          id="client"
          required
          v-model="currentMeting.client"
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
          v-model="currentMeting.prismaflipper6m"
          name="prismaflipper6m"
        />
      </div>

            <div class="form-group">
        <label for="bt">BT</label>
        <input
          type="number"
          class="form-control"
          id="bt"
          required
          v-model="currentMeting.bt"
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
          v-model="currentMeting.bn"
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
          v-model="currentMeting.prismaflipper40cm"
          name="prismaflipper40cm"
        />
      </div>      
      <div class="form-group">
        <label for="moeite">Meeste moeite met</label>
        <input
          type="text"
          class="form-control"
          id="moeite"
          required
          v-model="currentMeting.moeite"
          name="moeite"
        />
      </div>    
    </form>

    <v-btn class="badge badge-danger mr-2" @click="deleteMeting">
      Delete
    </v-btn>

    <v-btn type="submit" class="badge badge-success" @click="updateMeting">
      Update
    </v-btn>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Meting...</p>
  </div>
</template>

<script>
import MetingDataService from "../services/MetingDataService";

export default {
  name: "meting",
  props: ["meting"],
  data() {
    return {
      currentMeting: null,
      message: "",
    };
  },
  watch: {
    meting: function(meting) {
      this.currentMeting = { ...meting };
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      MetingDataService.update(this.currentMeting.key, {
        published: status,
      })
        .then(() => {
          this.currentMeting.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateMeting() {
      const data = {
        client: this.meting.client,
        prismaflipper6m: this.meting.prismaflipper6m,
        bt: this.meting.bt,
        bn: this.meting.bn,
        prismaflipper40cm: this.meting.prismaflipper40cm,
        moeite: this.meting.moeite,
      };

      MetingDataService.update(this.currentMeting.key, data)
        .then(() => {
          this.message = "The meting was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteMeting() {
      MetingDataService.delete(this.currentMeting.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentMeting = { ...this.meting }
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
