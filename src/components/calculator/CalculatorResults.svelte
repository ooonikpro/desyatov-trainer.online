<script lang="ts">
  export let sum: number;
  export let purpose: number;

  const text = [
    {
      b: "30-35",
      z: "30-35",
      g: "30-40"
    },
    {
      b: "25-35",
      z: "25-35",
      g: "40-50"
    },
    {
      b: "35-40",
      z: "15-25",
      g: "40-60"
    }
  ];
</script>

<div {...$$restProps} class="calculator-result">
  <table>
    <thead>
    <tr>
      <td><b>БЖУ</b></td>
      <td><b>%</b></td>
      <td><b>Г</b></td>
    </tr>
    </thead>

    <tbody>
    <tr>
      <td>Белки</td>
      <td>{text[purpose].b}</td>
      <td>{ sum * 4 / 100 }</td>
    </tr>
    <tr>
      <td>Жиры</td>
      <td>{text[purpose].z}</td>
      <td>{ sum * 9 / 100 }</td>
    </tr>
    <tr>
      <td>Углеводы</td>
      <td>{text[purpose].g}</td>
      <td>{ sum * 4 / 100 }</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
      <td>Результат</td>
      <td colspan="2">{sum}</td>
    </tr>
    </tfoot>
  </table>
</div>

<style lang="scss">
  .calculator-result {
    padding-top: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 1.4rem;

    &-value {
      @include textWithGradient;
      @include fontAlternative;
      font-weight: 700;
      width: 100%;
      max-width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 4rem;
    }
  }

  table {
    border-spacing: 0;
  }

  thead > tr > td {
    border-top-width: 2px;
    font-size: 1.2rem;
    text-align: center;

    &:first-child {
      border-top-left-radius: 8px;
      border-left-width: 2px;
    }

    &:last-child {
      border-top-right-radius: 8px;
      border-right-width: 2px;
    }
  }

  td {
    padding: 1rem;
    border: 1px solid rgba(white, .2);
    font-size: 1rem;

    @include desktop {
      font-size: 1.2rem;
    }

    @include desktop2k {
      font-size: 1.3rem;
    }

    &:nth-child(2),
    &:nth-child(3) {
      text-align: center;

    }

    &:first-child {
      border-left-width: 2px;
    }

    &:last-child {
      border-right-width: 2px;
    }
  }

  tfoot > tr > td {
    border-bottom-width: 2px;

    &:last-child {
      @include fontAlternative;
      @include textWithGradient;
      font-size: 1.6rem;
    }
  }
</style>
