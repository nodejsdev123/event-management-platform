import EventModel, { IEvent } from '../models/event';


export const addEvent = async (eventData: IEvent): Promise<IEvent> => {
  const newEvent = new EventModel(eventData);
  return await newEvent.save();
};

export const updateEvent = async (id: string, eventData: Partial<IEvent>): Promise<IEvent | null> => {
  return await EventModel.findByIdAndUpdate(id, eventData, { new: true });
};

export const deleteEvent = async (id: string): Promise<boolean> => {
  const result = await EventModel.findByIdAndDelete(id);
  return !!result;
};

export const getEventById = async (id: string): Promise<IEvent | null> => {
  return await EventModel.findById(id);
};

export const listEvents = async (filters: any): Promise<IEvent[]> => {
  return await EventModel.find(filters);
};
