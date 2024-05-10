<script lang="ts">
  import Switcher from "../switcher/Switcher.svelte";
  import Radio from "../radio/Radio.svelte";
  import Input from "../input/Input.svelte";
  import InputGroup from "../input/InputGroup.svelte";
  import RadioGroup from "../radio/RadioGroup.svelte";
  import CalculatorResults from "./CalculatorResults.svelte";
  import Range from "../range/Range.svelte";

  const purposeOptions = [
    {
      label: "Сбросить вес",
      value: 0
    },
    {
      label: "Поддерживать вес",
      value: 1
    },
    {
      label: "Набрать вес",
      value: 2
    }
  ];

  const activityOptions = [
    {
      label: "Низкая",
      value: 1.22
    },
    {
      label: "Средняя",
      value: 1.44
    },
    {
      label: "Высокая",
      value: 1.66
    }
  ];

  const formData = {
    gender: false,
    purpose: purposeOptions[0].value,
    age: "",
    height: "",
    weight: "",
    activity: 0
  };

  let sum = 0;

  const calculate = () => {
    let result =
      10 * Number(formData.weight) + 6.26 * Number(formData.height) - 5 * Number(formData.age);

    if (Number(formData.gender) === 0) result += 5;
    else result -= 161;

    result *= activityOptions[Number(formData.activity)].value;
    result = Math.ceil(Math.abs(result));

    sum = Number(result.toString().slice(0, 2) + "00");

    if (formData.purpose === 0) sum -= 300;
    if (formData.purpose === 2) sum += 500;
  };
</script>

<div class="calculator">
  <form class="calculator__form" on:submit|preventDefault={calculate}>
    <Switcher
      id="calc-gender"
      left="Я мужчина"
      right="Я женщина"
      label="Пол"
      bind:value={formData.gender}
    />

    <RadioGroup label="Xочу" inline>
      {#each purposeOptions as { label, value }, i}
        <Radio name="purpose" value={value} block required bind:group={formData.purpose}>{label}</Radio>
      {/each}
    </RadioGroup>

    <InputGroup>
      <Input
        type="number"
        maxlength="3"
        inputmode="numeric"
        label="Мой возраст"
        name="age"
        required
        bind:value={formData.age}
      />
      <Input
        type="number"
        maxlength="3"
        inputmode="numeric"
        label="Рост в см"
        name="height"
        required
        bind:value={formData.height}
      />
      <Input
        type="number"
        maxlength="3"
        inputmode="numeric"
        label="Вес в кг"
        name="weight"
        required
        bind:value={formData.weight}
      />
    </InputGroup>

    <Range
      label="Моя активность"
      min={0}
      step="1"
      max={activityOptions.length - 1}
      labels={activityOptions.map((i) => i.label)}
      bind:value={formData.activity}
    />

    <slot name="submit"></slot>
  </form>

  {#if sum > 0}
    <CalculatorResults {sum} purpose={formData.purpose} />
  {/if}
</div>

<style lang="scss">
  .calculator {
    max-width: 900px;
    margin: auto;

    &__form {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    &__submit {
      display: flex;
      flex-direction: column;
    }
  }
</style>
