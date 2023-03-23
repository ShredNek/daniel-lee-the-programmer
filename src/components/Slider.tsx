interface SliderInterface {
  percentage: string;
}

export default function Slider({ percentage }: SliderInterface) {
  return <div className="global-slider" style={{ width: percentage }} />;
}
