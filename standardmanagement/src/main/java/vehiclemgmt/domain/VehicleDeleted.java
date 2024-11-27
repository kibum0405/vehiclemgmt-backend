package vehiclemgmt.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.*;
import vehiclemgmt.domain.*;
import vehiclemgmt.infra.AbstractEvent;

//<<< DDD / Domain Event
@Data
@ToString
public class VehicleDeleted extends AbstractEvent {

    private Long id;

    public VehicleDeleted(Vehicle aggregate) {
        super(aggregate);
    }

    public VehicleDeleted() {
        super();
    }
}
//>>> DDD / Domain Event
