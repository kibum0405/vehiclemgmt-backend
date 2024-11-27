package vehiclemgmt.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.*;
import vehiclemgmt.domain.*;
import vehiclemgmt.infra.AbstractEvent;

//<<< DDD / Domain Event
@Data
@ToString
public class VehicleStatusUpdated extends AbstractEvent {

    private Long id;
    private VehicleStatus newStatus;

    public VehicleStatusUpdated(Vehicle aggregate) {
        super(aggregate);
    }

    public VehicleStatusUpdated() {
        super();
    }
}
//>>> DDD / Domain Event
