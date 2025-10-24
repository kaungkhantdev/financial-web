import { format } from "date-fns";

export const changeHumanReadAbleDate = (isoDate: string) => {
    // return formatDistanceToNow(new Date(isoDate), { addSuffix: true });
    return format(new Date(isoDate), "PP")
}