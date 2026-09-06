/* Linha do tempo com nós numerados. Usada só nas áreas cujo texto realmente
   descreve fases encadeadas — nas outras, uma timeline seria ornamento. */
const AreaTimeline = ({ steps, variant = "vertical" }) => (
  <ol className={`area-timeline area-timeline--${variant}`}>
    {steps.map((step, index) => (
      <li className="area-step" key={step.title}>
        <span className="area-step__marker" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="area-step__body">
          <h3 className="area-step__title">{step.title}</h3>
          <p className="area-step__text">{step.text}</p>
        </div>
      </li>
    ))}
  </ol>
);

export default AreaTimeline;
