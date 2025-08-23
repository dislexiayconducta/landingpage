"use client";
import { useServices } from "./services-context";
import {
  CBT,
  CognitiveRehab,
  Diagnostics,
  Mindfulness,
  PlayAttention,
  SchoolTutoring,
  Treatments,
  BehavioralRegulation,
} from "./sections";

export default function ActiveContent() {
  const { activeKey } = useServices();

  switch (activeKey) {
    case "diagnostics":
      return <Diagnostics />;
    case "treatments":
      return <Treatments />;
    case "cognitiveRehab":
      return <CognitiveRehab />;
    case "behavioralRegulation":
      return <BehavioralRegulation />;
    case "cbt":
      return <CBT />;
    case "playAttention":
      return <PlayAttention />;
    case "schoolTutoring":
      return <SchoolTutoring />;
    case "mindfulness":
      return <Mindfulness />;
    default:
      return <Diagnostics />;
  }
}
