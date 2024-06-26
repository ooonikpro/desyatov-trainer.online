<script lang="ts">
  export let id: string;
  export let label: string;
  export let left: string;
  export let right: string;
  export let withContent: boolean | undefined = false;
  export let value: boolean;
</script>

<div class="switcher">
  {#if label}
    <span class="switcher__label">{label}</span>
  {/if}

  <input {...$$restProps} class="switcher__input" type="checkbox" id={id} bind:checked={value} />
  <label class="switcher__trigger" for={id}>
    <span class="switcher__option">{left}</span>
    <span class="switcher__option">{right}</span>
    <span class="switcher__highlight"></span>
  </label>

  {#if withContent}
    <div class="switcher__content">
      <slot name="left-content" />
    </div>
    <div class="switcher__content">
      <slot name="right-content" />
    </div>
  {/if}
</div>

<style lang="scss">
  .switcher {
    &__label {
      display: block;
      color: var(--white);
      font-size: 1rem;
      opacity: 0.7;
    }

    &__trigger {
      display: flex;
      width: 100%;
      border: 2px solid var(--secondary);
      border-radius: 2rem;
      position: relative;
      overflow: hidden;

      @include desktop() {
        display: inline-flex;
        cursor: pointer;
      }

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
      }
    }

    &__input {
      visibility: hidden;
      opacity: 0;
    }

    &__option {
      @include fontAlternative();
      width: 50%;
      font-size: 0.8rem;
      color: var(--black);
      padding: 10px 16px 9.8px;
      z-index: 1;
      transition: color 300ms ease;
      user-select: none;
      text-align: center;

      @include desktop {
        font-size: 1.2rem;
      }
    }

    &__input:checked + &__trigger > &__option:nth-of-type(1),
    &__input:not(:checked) + &__trigger > &__option:nth-of-type(2) {
      color: var(--secondary);
    }

    &__highlight {
      position: absolute;
      width: 50%;
      top: 0;
      left: 0;
      bottom: 0;
      border-radius: inherit;
      background: var(--gradient);
      border: 2px solid var(--black);
      z-index: 0;
      transition: left 300ms ease,
      filter 0.5s linear;
    }

    &__input:checked + &__trigger > &__highlight {
      left: 50%;
      filter: hue-rotate(360deg);
    }

    &__content {
      transition: all 300ms ease;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 16px;
      padding-top: 1.6rem;
    }

    &__input:checked ~ &__content:nth-of-type(1),
    &__input:not(:checked) ~ &__content:nth-of-type(2) {
      display: none;
    }
  }
</style>
