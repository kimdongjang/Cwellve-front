import { parseISO, format } from 'date-fns'

export const Date = ({ dateString }) => {
    if (!!dateString) {
        const date = parseISO(dateString);

        return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    }
}