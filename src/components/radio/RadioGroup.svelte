<script lang="ts">
  export let label: string;
  export let textCenter: boolean | undefined = false;
  export let inline = false;
</script>

<div class="radio-group" class:radio-group--inline={inline}>
  <span class="radio-group__label" class:radio-group__label--center={textCenter}>{label}</span>
  <div class="radio-group__container">
    <slot />
  </div>
</div>

<style lang="scss">
  .radio-group {
    &__label {
      width: 100%;
      display: block;
      margin-bottom: 8px;
      color: var(--white);
      font-size: 1rem;
      opacity: 0.7;

      &--center {
        text-align: center;
      }
    }

    &__container {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
    }

    &--inline &__container {
      flex-direction: row;
      flex-wrap: wrap;

      @include desktop() {
        flex-wrap: nowrap;
      }
    }
  }
</style>
