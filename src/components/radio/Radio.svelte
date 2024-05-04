<script>
  export let name;
  export let value;
  export let block = false;
  export let checked;
</script>

<label class="radio" class:radio--block={block} class:radio--point={!block}>
  <input
    bind:group={name}
    class="radio__input"
    type="radio"
    name={name}
    value={value}
    checked={checked}
  />
  <span class="radio__indicator"></span>
  <span class="radio__text">
    <span class="radio__text-title">
      <slot />
    </span>
    <span class="radio__text-description">
      <slot name="description" />
    </span>
  </span>
</label>

<style lang="scss">
  .radio {
    position: relative;
    width: 100%;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 16px;

    @include desktop() {
      cursor: pointer;
    }

    &__input {
      display: none;
    }

    &__indicator {
      border: 3px solid var(--secondary);
      z-index: 1;
      transition: all 300ms ease;
    }

    &__text {
      display: flex;
      flex-direction: column;
      z-index: 1;
    }

    &__text-title {
      font-size: 1.2rem;
      font-weight: 700;
      transition: all 300ms ease;
    }

    &__text-description {
      font-size: .9rem;
      font-weight: 500;
      opacity: .8;
      transition: all 300ms ease;
    }

    &--point &__indicator {
      width: 36px;
      height: 36px;
      border-radius: 30px;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        display: block;
        margin: auto;
        inset: 0;
        border-radius: 2rem;
        background: var(--gradient);
        transition: all 300ms ease, filter 1s linear;
        transform-origin: center;
        transform: scale(0);
        opacity: 0;
      }
    }

    &--point &__input:checked ~ &__indicator::before {
      filter: hue-rotate(360deg);
      transform: scale(0.8);
      opacity: 1;
    }

    &--block {
      flex: 1 1 auto;
      padding: 1rem;
      text-align: center;
      align-items: center;
      justify-content: center;
    }

    &--block &__indicator {
      position: absolute;
      inset: 0;
      border-radius: 10px;
      transition: all 300ms ease, filter 1s linear;
      transform-origin: center;
      z-index: 0;
    }

    &--block &__text-title {
      font-size: .9rem;
      color: var(--secondary);
      @include fontAlternative();

      @include desktop {
        font-size: 1.2rem;
      }
    }

    &--block &__input:checked ~ &__indicator {
      @include bgWithGradient();
      filter: hue-rotate(360deg);
    }

    &--block &__input:checked ~ &__text &__text-title {
      color: var(--black);
    }

    &--block &__input:checked ~ &__text &__text-description {
      color: var(--black);
    }
  }
</style>