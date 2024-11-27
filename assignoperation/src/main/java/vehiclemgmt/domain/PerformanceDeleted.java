package vehiclemgmt.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.*;
import vehiclemgmt.domain.*;
import vehiclemgmt.infra.AbstractEvent;

//<<< DDD / Domain Event
@Data
@ToString
public class PerformanceDeleted extends AbstractEvent {

    private String registrationId;

    public PerformanceDeleted(VehiclePerformance aggregate) {
        super(aggregate);
    }

    public PerformanceDeleted() {
        super();
    }
}
//>>> DDD / Domain Event
