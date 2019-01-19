const submissionComponent = {
  template: `
  <article class="media" :class="{ 'green-border': item.votes >= 20 }">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="item.submissionImage">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>
            <a href="#" class="has-text-info">{{ item.title }}</a>
            <span class="tag is-small">#{{ item.id }}</span>
          </strong>
          <br>
          {{ item.description }}
          <br>
          <small class="is-size-7">
            Submitted by:
            <img class="image is-24x24" :src="item.avatar">
          </small>
        </p>
      </div>
    </div>
    <div class="media-right">
      <span class="tag btn-tag is-success" @click="upvote(item.id)">
        <i class="fa fa-chevron-up"></i>  
      </span>

      <span class="tag is-light has-text-weight-bold">
        {{ item.votes }}
      </span>

      <span class="tag btn-tag is-warning" @click="downvote(item.id)">
        <i class="fa fa-chevron-down"></i>  
      </span>
    </div>
  </article>`,
  props: ['item', 'submissions'],
  methods: {
    upvote(id) {
      const submission = this.submissions.find(submission => submission.id === id);
      submission.votes++;
    },
    downvote(id) {
      const submission = this.submissions.find(submission => submission.id === id);
      submission.votes--;
    }
  }
}

let app = new Vue({
  el: '#app',
  components: {
    'submission-component': submissionComponent
  },
  data() {
    return {
      submissions
    }
  },
  computed: {
    sortedSubmissions () {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    }
  },
});