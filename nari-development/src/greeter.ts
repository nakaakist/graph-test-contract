import { GreetingChanged } from "./generated/Greeter/Greeter";
import { Greeting } from "./generated/schema";

export function handleGreetingChanged(event: GreetingChanged): void {
  const greeting = new Greeting("id");
  greeting.lastUpdated = event.params.timestamp;
  greeting.message = event.params.message;
  greeting.save();
}
