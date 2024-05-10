<script lang="ts">
  export let label: string;
  export let labels: string[];
  export let value: number;
  export let max: number;

  const getGradientString = (percentage: number) => {
    console.log(percentage);

    if (percentage >= 50 && percentage < 100) {
      return `linear-gradient(to right, red 0%, yellow 50%, var(--black-secondary) 50%, var(--black-secondary) 100%)`;
    }

    if (percentage === 100) {
      return `linear-gradient(to right, red 0%, yellow 50%, green ${percentage}%, var(--black-secondary) ${percentage}%, var(--black-secondary) 100%)`;
    }

    return `var(--black-secondary)`;
  };

  $: style = `background: ${getGradientString((Number(value) / max) * 100)}`;

  $: console.log(value);
</script>

<label class="range">
  {#if label}
    <span class="range__label">{label}</span>
  {/if}

  <input
    {...$$restProps}
    max={max}
    style={style}
    type="range"
    class="range__input"
    bind:value={value}
  />

  <span class="range__post-label">{labels[value]}</span>
</label>

<style lang="scss">
  @mixin sliderThumb {
    appearance: none;

    width: 34px;
    height: 34px;
    border-radius: 34px;
    cursor: grab;
    background: var(--white);
    border: 1px solid rgba(black, .1);
    box-shadow: 0 0 2px rgba(black, .5);

    &:active {
      cursor: grabbing;
    }
  }

  .range {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__label {
      color: var(--white);
      font-size: 1rem;
      opacity: 0.7;
    }

    &__input {
      appearance: none;

      width: 100%;
      height: 16px;
      border-radius: 16px;
      border: none;
      outline: none;
      transition: filter 1s linear;
    }

    &:hover &__input {
      filter: hue-rotate(360deg);
    }

    input[type="range"]::-webkit-slider-thumb {
      @include sliderThumb;
    }

    input[type="range"]::-moz-range-thumb {
      @include sliderThumb;
    }

    input[type="range"]::-ms-thumb {
      @include sliderThumb;
    }

    &__post-label {
      padding-top: 0.2rem;
      font-size: 1.2rem;
    }
  }
</style>
