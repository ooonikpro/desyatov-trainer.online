<script lang="ts">
  export let label: string;
</script>


<label class="input">
  <span class="input__label">{label}</span>
  <input class="input__input" {...$$restProps} />
</label>

<style lang="scss">
  .input {
    height: 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &,
    &__input,
    &__border {
      width: 100%;
    }

    &__label {
      color: var(--white);
      font-size: 1rem;
      opacity: .7;
    }

    &__input {
      @include fontAlternative;
      height: 100%;
      padding: 0 1.5rem;
      color: var(--white);
      border: 2px solid rgba(#fff, .2);
      font-size: 1.2rem;
      text-align: center;
      font-weight: bold;
      background: none;
      outline: none;
      border-radius: 8px;
    }
  }
</style>