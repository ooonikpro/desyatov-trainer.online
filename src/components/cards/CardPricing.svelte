<script lang="ts">
  import Radio from "../radio/Radio.svelte";
  import RadioGroup from "@components/radio/RadioGroup.svelte";
  import Switcher from "@components/switcher/Switcher.svelte";

  export let id: string;
  export let textPrice: number;
  export let videoPrice: number;

  const durationRadioName = `time-${id}-radio`;
  const subscriptionCheckboxName = `sub-${id}-type`;

  const discount = 10;

  const getPrice = (price: number, month: number) => {
    if (month > 1) return price * month * ((100 - discount) / 100);
    return price;
  };

  const formatOptions = [
    {
      label: "Текст",
      value: false
    },
    {
      label: "Видео",
      value: true
    }
  ];

  const formData = {
    format: false,
    duration: 1
  };

  $: price = formData.format ? videoPrice : textPrice;

  const durationOptions = [
    {
      label: `1 месяц`,
      value: 1
    },
    {
      label: `3 месяца`,
      value: 3
    }
  ];
</script>

<div class="card-pricing">
  <form class="card-pricing__form">
    <Switcher
      id={subscriptionCheckboxName}
      label="Формат тренировок"
      left={formatOptions[0].label}
      right={formatOptions[1].label}
      bind:value={formData.format}
    />

    <RadioGroup label="Продолжительность подписки">
      {#each durationOptions as { label: durationLabel, value: durationVal }}
        <Radio name={durationRadioName} value={durationVal} bind:group={formData.duration} required>
          {durationLabel} за <span class="card-pricing__price">{getPrice(price, durationVal)}</span> ₽
          {#if durationVal > 1}
            <span class="card-pricing__old-price">{price * durationVal} ₽.</span>
          {/if}
          <svelte:fragment slot="description">
            {#if durationVal > 1}
              Выгоднее на {discount}%
            {/if}
          </svelte:fragment>
        </Radio>
      {/each}
    </RadioGroup>

    <div class="card-pricing__submit">
      <span class="card-pricing__total-price">Итого: <b>{getPrice(price, formData.duration)}</b> ₽</span>
      <slot name="submit-btn" />
    </div>
  </form>

  <slot name="cancel-btn" />
</div>

<style lang="scss">
  .card-pricing {
    gap: 12px;

    &, &__form {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
    }

    &__form {
      gap: 24px;
    }

    &__price {
      @include fontAlternative;
      font-size: 1rem;
    }

    &__old-price {
      opacity: .5;
      font-weight: 300;
      text-decoration: line-through;
      font-size: 0.9rem;
    }

    &__submit {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &__total-price {
      font-size: 1.2rem;
    }
  }
</style>