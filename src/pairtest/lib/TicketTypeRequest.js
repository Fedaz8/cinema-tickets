/**
 * Immutable Object.
 */

export default class TicketTypeRequest {
  #ticketType;
  #noOfTickets;

  #TicketTypes = Object.freeze(["ADULT", "CHILD", "INFANT"]);
  #TicketPrices = Object.freeze({
    ADULT: 25,
    CHILD: 15,
    INFANT: 0,
  });

  constructor(ticketType, noOfTickets) {
    if (!this.#TicketTypes.includes(ticketType)) {
      throw new TypeError(
        `type must be ${this.#TicketTypes
          .slice(0, -1)
          .join(", ")}, or ${this.#TicketTypes.slice(-1)}`
      );
    }

    if (!Number.isInteger(noOfTickets)) {
      throw new TypeError("noOfTickets must be an integer");
    }

    this.#ticketType = ticketType;
    this.#noOfTickets = noOfTickets;

    Object.freeze(this);
  }

  getNoOfTickets() {
    return this.#noOfTickets;
  }

  getTicketType() {
    return this.#ticketType;
  }
}
