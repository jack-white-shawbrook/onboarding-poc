type ProgressBarProps = {
  showBackButton: boolean;
  backButtonCallback: () => void;
  percentage: number;
};

export const ProgressBar = ({
  showBackButton,
  backButtonCallback,
  percentage,
}: ProgressBarProps) => {
  return (
    <section className="progress-bar-container">
      {showBackButton && (
        <button className="back-button" onClick={backButtonCallback}>
          BACK
        </button>
      )}
      <div className="progress-bar">Completion: {percentage}%</div>
    </section>
  );
};
