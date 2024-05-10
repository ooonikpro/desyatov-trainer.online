<div class="input-group">
  <slot />
</div>

<style lang="scss">
  .input-group {
    display: flex;

    :global(.input .input__label) {
      text-align: center;
    }


    :global(.input:first-child .input__input) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    :global(.input:not(:first-child):not(:last-child) .input__input) {
      border-radius: 0;
      border-left: 0;
      border-right: 0;
    }

    :global(.input:last-child .input__input) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
</style>
