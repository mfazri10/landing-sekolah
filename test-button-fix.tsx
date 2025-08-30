import { Button } from "@/components/ui/button";

export default function TestButtonFix() {
  const isSubmitting = false;
  
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
    >
      Test Button
    </Button>
  );
}
