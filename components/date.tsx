import { format } from "date-fns";
import fr from "date-fns/locale/fr";

export default function DateComponent({ dateString }: { dateString: string }) {
  const locale = fr;
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), "d LLLL yyyy", { locale })}
    </time>
  );
}
